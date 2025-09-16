import Key from "./Key"
import Keyboard from "./Keyboard"

function App() {

  return (
    <>
<div className="min-h-screen w-full bg-black relative overflow-hidden">
  {/* Blue Spotlight Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: `
        radial-gradient(
          circle at center,
          rgba(59, 130, 246, 0.12) 0%,
          rgba(59, 130, 246, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
    }}
  />
  {/* Your Content Here */}
           <div className="relative z-20 h-screen flex justify-center items-center">
          <Keyboard />
        </div>
</div>

    </>
  )
}

export default App
