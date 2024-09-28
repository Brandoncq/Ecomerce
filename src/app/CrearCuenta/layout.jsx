import { FormProvider } from "./context";

export default function LayoutCrearCuenta({ children }) {
  return (
    <FormProvider>
      <div className="border-t-4 boerder-zinc-200">{children}</div>
    </FormProvider>
  );
}
