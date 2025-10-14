import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./promts";
import { sendWelcomeEmail } from "../nodemailer";

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    try {
      const userProfile = `
        - Country: ${event.data.country}
        - Investment goals: ${event.data.InvestmentGoals}
        - Risk tolerance: ${event.data.riskTolerance}
        - Preferred industry: ${event.data.preferredIndustry}
      `;

      const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
        "{{userProfile}}",
        userProfile
      );

      const response = await step.ai.infer("generate-welcome-intro", {
        model: step.ai.models.gemini({ model: "gemini-2.0-flash-lite" }),
        body: {
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        },
      });

      const introText = await step.run("extract-intro-text", () => {
        const part = response.candidates?.[0]?.content?.parts?.[0];
        return (
          (part && "text" in part ? part.text : null) ||
          "Thanks for joining Signalist. You now have the tools to track markets and make smarter moves."
        );
      });

      await step.run("send-welcome-email", async () => {
        const { email, name } = event.data;
        return sendWelcomeEmail({
          email,
          name,
          intro: introText,
        });
      });

      return { success: true, message: "Welcome email sent successfully" };
    } catch (error) {
      console.error("Failed to send welcome email:", error);
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send welcome email",
      };
    }
  }
);
