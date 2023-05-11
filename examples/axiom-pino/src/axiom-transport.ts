import build from "pino-abstract-transport";

import { Client as AxiomClient } from "@axiomhq/axiom-node";
import { PinoAxiomOptions } from "./types";
import { mapLogLevel } from "./helpers";

export async function axiomTransport({
  axiomDatasetId,
  axiomOrgId,
  axiomToken,
  axiomUrl,
  onDebug,
}: PinoAxiomOptions) {
  const axiom = new AxiomClient({
    orgId: axiomOrgId,
    token: axiomToken,
    url: axiomUrl,
  });

  return build(async function (source) {
    for await (const obj of source) {
      if (!obj) {
        if (onDebug) {
          onDebug(`Log source object is empty.`);
        }
        return;
      }

      const { time, level, ...rest } = obj;
      const eventLevel = mapLogLevel(level);

      const event = {
        _time: time,
        level: eventLevel,
        ...rest,
      };

      axiom.ingestEvents(axiomDatasetId, event);
    }
  });
}
