import SignInForm from "./components/SignInForm";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="rounded-md bg-white shadow-xl w-4/12 min-w-fit max-h-fit absolute inset-0 mx-auto my-auto flex items-center justify-center">
          <SignInForm/>
      </div>
    </div>
  );
}
