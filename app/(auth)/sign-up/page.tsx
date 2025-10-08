"use client";

import CountrySelectField from "@/components/forms/CountrySelectField";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "INDIA",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* inputs  */}

        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          error={errors.fullName}
          register={register}
          validation={{ require: true, minLength: 2 }}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="venkateshpentakota888@gmail.com"
          error={errors.email}
          register={register}
          validation={{
            require: "email is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email address is required",
          }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          error={errors.password}
          register={register}
          validation={{ require: true, minLength: 8 }}
        />

        {/* country */}

        <CountrySelectField />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5 "
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
