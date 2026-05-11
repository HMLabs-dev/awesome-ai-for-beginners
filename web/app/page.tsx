import fs from "node:fs";
import path from "node:path";
import ReadmeViewer from "./components/ReadmeViewer";

export const dynamic = "force-static";

export default function Home() {
  const readmePath = path.resolve(process.cwd(), "..", "readme.md");
  const markdown = fs.readFileSync(readmePath, "utf8");

  return <ReadmeViewer markdown={markdown} />;
}
