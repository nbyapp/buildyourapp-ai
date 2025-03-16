import { CreateAppForm } from "@/components/create/create-app-form";

export default function CreatePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Create Your App
        </h1>
        <p className="text-gray-600">
          Describe your app idea in plain English and our AI will generate a complete app for you.
        </p>
      </div>

      <CreateAppForm />
    </div>
  );
}
