import { FormProvider } from "./context";

export default function LayoutCrearCuenta({ children }) {
  return <FormProvider>{children}</FormProvider>;
}
