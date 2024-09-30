import { z } from "zod";

const signupSchema = z.object({
    firstName: z
        .string()
        .min(1, "First Name is required"),

    lastName: z
        .string()
        .min(1, { message: "Last Name is required" }),

    email: z
        .string()
        .min(1, { message: "email address is required" })
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),

    confirmPassword: z
        .string()
        .min(8, "Password must be at least 8 characters"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password do not match",
        path: ["confirmPassword"],
    });

// drfine the type of the form inputs using from schema using z.infer
type TSignupInputs = z.infer<typeof signupSchema>;

export { signupSchema, type TSignupInputs };