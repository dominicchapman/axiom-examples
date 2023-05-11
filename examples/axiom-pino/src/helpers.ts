import { AxiomEventLevel } from "./types";

/**
 * Maps a Pino log level to an Axiom event severity level.
 * @param level Pino Log level
 */
export const mapLogLevel = (level: string | number) => {
  if (typeof level === "string") {
    return level;
  }

  if (level <= 10) {
    return AxiomEventLevel.Trace;
  }
  if (level <= 20) {
    return AxiomEventLevel.Debug;
  }
  if (level <= 30) {
    return AxiomEventLevel.Info;
  }
  if (level <= 40) {
    return AxiomEventLevel.Warn;
  }
  if (level <= 50) {
    return AxiomEventLevel.Error;
  }
  if (level <= 60) {
    return AxiomEventLevel.Fatal;
  }

  return AxiomEventLevel.Silent;
};
