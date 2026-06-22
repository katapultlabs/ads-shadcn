import { AlertMeta } from "./components/Alert.meta";
import { ButtonMeta } from "./components/Button.meta";
import { CardMeta } from "./components/Card.meta";
import { InputMeta } from "./components/Input.meta";
import { richComponentMeta } from "./generated/rich-component-meta.generated";

export const componentMeta = [ButtonMeta, InputMeta, CardMeta, AlertMeta];
export type { ComponentMeta } from "./meta.types";
export { richComponentMeta };
export type { RichComponentMeta } from "./generated/rich-component-meta.generated";
