import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(4, 'Minimum of 4 characters..'),
    lastname:z.string().min(4, 'Minimum of 4 characters..'),
    gender: z.string().refine((field) => field !== 'select', {
        message: 'You have to select an option!'
    } ),
    email: z.string().min(1, 'This is a requested field.').email('Please fill with a valid email'),
    password: z.string().min(6, 'Minimum of 6 characters.'),
    confirmpassword: z.string().min(6, 'The confirmation has to have minimum of 6 characters.'),
    agree: z.boolean().refine((field) => field === true, {
        message: 'You need to agree with the terms'
    } )
}).refine((field) => field.password === field.confirmpassword,{
    message: "The password has to be the same",
    path: ['confirmpassword'],
} );

export type FormSchema = z.infer<typeof formSchema>;