import { Suspense } from "react"

// Components
import { Container } from "@/components/container"
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { EntityTableSkeleton } from "@/components/skeletons"
import { CreateEntityForm } from "./_components/create-entity-form"
import { EntityTable } from "./_components/entity-table"

const Entity = () => {
  return (
    <Container>
      <div className="container space-y-4 px-0">
        <Title>Entidade</Title>
        <Subtitle label="Criar nova entidade" />
        <CreateEntityForm />
        <Subtitle label="Entidades cadastradas" />
        <Suspense fallback={<EntityTableSkeleton />}>
          <EntityTable />
        </Suspense>
      </div>
    </Container>
  )
}

export default Entity
