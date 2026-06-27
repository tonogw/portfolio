export type AnimationState = "idle" | "loading" | "success" | "error";

export interface AnimationStage {
  flapClosed: boolean;
  showBadge: boolean;
}
