// todo: export `ClientOptions` from @axiomhq/axiom-node so the interface can be extended.
export interface PinoAxiomOptions {
  /**
   * Axiom Dataset ID, found at app.axiom.co/<ORG_ID>/datasets/<DATASET_ID>.
   */
  axiomDatasetId: string;
  /**
   * Axiom Organization ID, found at app.axiom.co/<ORG_ID>.
   */
  axiomOrgId: string;
  /**
   * Axiom API token, found at app.axiom.co/settings/api-tokens.
   */
  axiomToken: string;
  /**
   * Axiom API URL, which defaults to https://api.axiom.co.
   */
  axiomUrl?: string;
  /**
   * Optional callback function for debug messages from this transport.
   */
  onDebug?: (message: string) => void;
}

// todo: Confirm supported event severity levels.
// Copy Pino for now (https://github.com/pinojs/pino/blob/master/docs/api.md#loggerlevel-string-gettersetter)
export enum AxiomEventLevel {
  Trace = "trace",
  Debug = "debug",
  Info = "info",
  Warn = "warn",
  Error = "error",
  Fatal = "fatal",
  Silent = "silent",
}
