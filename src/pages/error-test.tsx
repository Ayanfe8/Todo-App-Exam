import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface ErrorTestProps {
  message: string; 
  retry?: () => void
}

export default function ErrorTest({ message, retry }: ErrorTestProps) {
  const [shouldCrash, setShouldCrash] = useState(false)

  if (shouldCrash) {
    throw new Error("Intentional test error triggered!")
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <Card className="max-w-md w-full rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Error Boundary Test</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Click the button below to intentionally crash this page and test
            your error boundary.
          </p>

          <Button
            variant="destructive"
            className="w-full"
            onClick={() => setShouldCrash(true)}
          >
            Trigger Error
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
