"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import CardStats from "@/components/dashboard/cards-stats"
import ResponsiveModalSide from "@/components/dashboard/create-assignment"
import AssignmentFolders from "@/components/dashboard/folder-card"

export default function TugasPage() {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex flex-1 flex-col gap-6 p-6 mx-auto w-full max-w-7xl">
        <section>
          <CardStats cardData={[]} />
        </section>
        <Separator />
        <section className="flex items-center gap-4">
          <ResponsiveModalSide />
          <Button variant="outline" className="rounded-lg">
            Sort
          </Button>
        </section>
        <section>
          <AssignmentFolders />
        </section>
      </main>
    </div>
  )
}
