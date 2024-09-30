'use client'
import {useCallback, useState} from 'react';
import { useForm, FieldValues ,SubmitHandler} from 'react-hook-form';
import Input from '@/app/components/inputs/input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub,BsGoogle } from 'react-icons/bs';

type Variant ="Login" | "Register";
const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('Login');
    const [isLoading , setIsLoading] = useState<boolean>(false);
    
    const toggleVariant = useCallback(() => {
        if (variant==='Login') {
            setVariant('Register');
        } else {
            setVariant('Login');
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm <FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
    }});

    const onSubmit : SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        if(variant==='Register'){
            // Register
        }
        if(variant==='Login'){
            // Login
        }  
    }
    const socialAction = (action:string) => {
        setIsLoading(true);
    }
  return (
    <div className ="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form method="get" 
                  className='space-y-6'
                  onSubmit={handleSubmit(onSubmit)}>
                
                {variant === "Register" && (
                    <Input
                    id="name"
                    lable="Name"
                    register={register}
                    errors={errors}/>)}
                
                <Input 
                    id="email"
                    lable="Email address"
                    type='email'
                    register={register}
                    errors={errors}
                    />
                <Input
                    id="password"
                    lable="Password"
                    type='password'
                    register={register}
                    errors={errors}/>

            <div>
                <Button
                    disabled={isLoading}
                    fullwidth 
                    types='submit'    >
                    {variant === "Login" ? "Sign in" : "Register"}
                </Button>
            </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <AuthSocialButton 
                    icon ={BsGithub}
                    onClick={()=>socialAction('github')}/>
                    <AuthSocialButton 
                    icon ={BsGoogle}
                    onClick={()=>socialAction('google')}/>
                </div>
                    
            </div>
            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                <div>
                    {variant==="Login"? "Don't have an account?" : "Already have an account?"}
                </div>
                <div onClick={toggleVariant}
                    className="underline cursor-pointer">
                    {variant === "Login" ? 'Create Account' : 'Sign in'}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm