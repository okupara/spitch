import { globbySync } from "globby"
import { rollup } from "rollup"
import typescript from "@rollup/plugin-typescript"

const entryPoints = globbySync("./src/**/**.{ts,tsx}")

const filteredEntryPoints = entryPoints.filter(
  (entryPoint) => !entryPoint.match(/\.stories\.|\.test\./)
)

build()

async function build() {
  try {
    const bundle = await rollup({
      input: filteredEntryPoints,
      plugins: [typescript()],
      external: ["react"],
    })
    await bundle.write({ dir: "./dist", format: "es", preserveModules: true })
  } catch (e) {
    console.error(e)
  }
}
