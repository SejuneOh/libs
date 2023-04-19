import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register, //register: regist input을 hook에 등록합니다.  타입 이름 맞춰야함 
    handleSubmit, // submit event handler
    watch, //detecting input data
    formState: { errors },
  } = useForm<InputProps>();

  const onSumit: SubmitHandler<InputProps> = (data) => {
    console.log("🚀 ~ file: loginForm.tsx:31 ~ LoginForm ~ data:", data);
  };

  // 실제 데이터가 움직이는 것을 볼 수 있는 함수
  console.log("watch",watch("email"));
  console.log(watch("password"));

  return (
    <>
      <form onSubmit={handleSubmit(onSumit)}>
        <div className="flex-col items-center gap-1">
        <input
          className="border border-solid border-red-600"
          type="text"
          placeholder="email"
          {...register("email")}
        />
        <input
          className="border border-solid border-blue-600"
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.email && <span>This field is required</span>}
        <input type="submit" />
 
        </div>
     </form>
    </>
  );
}
