import {
  Button,
  ButtonLink,
  Column,
  Input,
  Label,
  Row,
  Switch,
  Tabs,
  TabsPanel,
  TabsPillList,
  TabsPillTab,
  Textarea,
} from "@nattstack/ui"
import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"

export const Route = createFileRoute("/")({
  component: Home,
})

const stats = [
  {
    label: "Activation rate",
    note: "Set up flows are landing in under 8 minutes.",
    value: "72%",
  },
  {
    label: "Weekly demos",
    note: "Small product previews teams can share internally.",
    value: "18",
  },
  {
    label: "Approval time",
    note: "Most feedback is resolved before lunch.",
    value: "2.4h",
  },
]

const toggles = [
  {
    defaultChecked: true,
    description: "Send a kickoff note when a new workspace is created.",
    title: "Welcome message",
  },
  {
    defaultChecked: true,
    description: "Create a shareable preview link for early stakeholder review.",
    title: "Public preview",
  },
  {
    defaultChecked: false,
    description: "Pin release updates to the dashboard home feed.",
    title: "Release digest",
  },
]

const reviewQueue = [
  {
    owner: "Mina",
    status: "Ready",
    title: "Homepage refresh",
  },
  {
    owner: "Jules",
    status: "Waiting",
    title: "Checkout microcopy",
  },
  {
    owner: "Noah",
    status: "QA",
    title: "Mobile drawer polish",
  },
]

const releaseSteps = [
  {
    detail: "Capture the headline, owner, and success metric before kickoff.",
    step: "Brief",
  },
  {
    detail: "Share a lightweight preview with product, design, and support.",
    step: "Review",
  },
  {
    detail: "Bundle final notes, timeline, and launch CTA in one place.",
    step: "Launch",
  },
]

const activity = [
  {
    summary: "Updated button hierarchy and spacing tokens for the onboarding surface.",
    time: "8m ago",
    title: "Starter page refresh",
  },
  {
    summary: "QA flagged copy balance in the feature comparison panel.",
    time: "26m ago",
    title: "Feedback from content review",
  },
  {
    summary: "Shared a preview link with customer success for rollout planning.",
    time: "1h ago",
    title: "Preview link generated",
  },
]

function Home() {
  return (
    <main className="min-h-screen px-24 pt-48 pb-80">
      <Column className="mx-auto w-full max-w-[112rem] gap-32">
        <Surface className="from-primary-3 gap-28 bg-linear-to-br to-transparent p-36">
          <Row className="flex-wrap items-stretch justify-between gap-28">
            <Column className="min-w-0 flex-[1_1_46rem] gap-20">
              <span className={eyebrowClassName}>Nattstack UI demo gallery</span>
              <Column className="gap-12">
                <h1 className={titleClassName}>
                  A few clean example surfaces built with Nattstack UI.
                </h1>
                <p className="text-16 text-gray-11 m-0 max-w-[56rem] leading-[1.6]">
                  This page mixes hero content, settings controls, queue layouts, and tabbed
                  previews so you can quickly see how the components feel together in a real app.
                </p>
              </Column>
              <Row className="flex-wrap gap-12">
                <Button size={48} variant="accent">
                  Create workspace
                </Button>
                <Button size={48} variant="secondary">
                  Preview layout
                </Button>
                <ButtonLink
                  href="https://github.com/nattstack/ui"
                  rel="noreferrer"
                  size={48}
                  target="_blank"
                  variant="ghost"
                >
                  View library
                </ButtonLink>
              </Row>
            </Column>

            <Column className="border-primary-6 from-primary-2 to-gray-2 min-w-[28rem] flex-[0_1_32rem] gap-20 rounded-[2.4rem] border bg-linear-to-b p-24">
              <Row className="items-center justify-between">
                <span className={pillClassName}>Launch kit</span>
                <span className={metaClassName}>Updated 2m ago</span>
              </Row>

              <Column className="rounded-20 border-gray-4 bg-gray-1 gap-14 border p-16">
                <MetricRow label="Owner" value="Natt" />
                <MetricRow label="Stage" value="Review" />
                <MetricRow label="Feedback" value="12 notes" />
              </Column>

              <Column className="gap-8">
                <p className={panelTitleClassName}>Next up</p>
                <p className={copyClassName}>
                  Package the release summary, polish the support copy, and send a preview link to
                  the wider team.
                </p>
              </Column>

              <Row className="flex-wrap gap-8">
                <Button size={40} variant="accent">
                  Share preview
                </Button>
                <Button size={40} variant="ghost">
                  Remind team
                </Button>
              </Row>
            </Column>
          </Row>
        </Surface>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-16">
          {stats.map((stat) => (
            <Surface key={stat.label} className="gap-12 p-24">
              <span className={metaClassName}>{stat.label}</span>
              <strong className={statValueClassName}>{stat.value}</strong>
              <p className={copyClassName}>{stat.note}</p>
            </Surface>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(32rem,1fr))] gap-16">
          <Surface className="h-full gap-24 p-28">
            <SectionHeader
              description="A compact form pattern using labels, inputs, textarea, and toggle rows."
              label="Settings card"
              title="Workspace preferences"
            />

            <Column className="gap-16">
              <Field id="workspace-name" label="Workspace name">
                <Input
                  defaultValue="Nattstack Starter"
                  id="workspace-name"
                  placeholder="Studio Alpha"
                  size={44}
                />
              </Field>

              <Field id="workspace-url" label="Share URL">
                <Input
                  defaultValue="nattstack-ui-demo"
                  id="workspace-url"
                  placeholder="launch-kit"
                  size={44}
                />
              </Field>

              <Field id="workspace-brief" label="Launch brief">
                <Textarea
                  defaultValue="A polished starter surface for demos, settings, and product previews."
                  id="workspace-brief"
                  rows={4}
                />
              </Field>
            </Column>

            <Column className="gap-12">
              {toggles.map((toggle) => (
                <Row
                  key={toggle.title}
                  className="rounded-20 border-gray-4 bg-gray-1 items-center justify-between border p-16"
                >
                  <Column className="min-w-0 flex-1 pr-16">
                    <Label className="text-14! text-gray-12!" htmlFor={toggle.title}>
                      {toggle.title}
                    </Label>
                    <span className={copyClassName}>{toggle.description}</span>
                  </Column>
                  <Switch
                    id={toggle.title}
                    aria-label={toggle.title}
                    isDefaultChecked={toggle.defaultChecked}
                    size={24}
                  />
                </Row>
              ))}
            </Column>

            <Row className="flex-wrap gap-12">
              <Button size={44} variant="accent">
                Save settings
              </Button>
              <Button size={44} variant="secondary">
                Duplicate template
              </Button>
            </Row>
          </Surface>

          <Surface className="h-full gap-24 p-28">
            <SectionHeader
              description="A lightweight admin queue that shows how buttons and stacked content read inside a denser panel."
              label="Operations panel"
              title="Review queue"
            />

            <Column className="gap-12">
              {reviewQueue.map((item) => (
                <Row
                  key={item.title}
                  className="rounded-20 border-gray-4 bg-gray-1 items-center justify-between border p-16"
                >
                  <Column className="min-w-0 flex-1 gap-4 pr-16">
                    <strong className={itemTitleClassName}>{item.title}</strong>
                    <span className={copyClassName}>Owner: {item.owner}</span>
                  </Column>
                  <span
                    className={cn(
                      "whitespace-nowrap rounded-full px-10 py-6 text-12 font-bold",
                      item.status === "Ready"
                        ? "bg-primary-3 text-primary-11"
                        : "bg-gray-3 text-gray-11",
                    )}
                  >
                    {item.status}
                  </span>
                </Row>
              ))}
            </Column>

            <Column className="border-gray-4 bg-gray-2 gap-16 rounded-[2.2rem] border p-[1.8rem]">
              <Column className="gap-6">
                <p className={panelTitleClassName}>Suggested actions</p>
                <p className={copyClassName}>
                  Accent for the primary workflow, secondary for support actions, and ghost for the
                  low-emphasis escape hatch.
                </p>
              </Column>

              <Row className="flex-wrap gap-8">
                <Button size={44} variant="accent">
                  Approve selected
                </Button>
                <Button size={44} variant="secondary">
                  Request changes
                </Button>
                <Button size={44} variant="ghost">
                  Snooze alerts
                </Button>
              </Row>

              <Row className="flex-wrap gap-8">
                <Button size={36} variant="primary">
                  Small primary
                </Button>
                <Button size={40} variant="secondary">
                  Medium secondary
                </Button>
                <Button size={48} variant="ghost">
                  Large ghost
                </Button>
              </Row>

              <ButtonLink
                href="https://github.com/nattstack/ui"
                rel="noreferrer"
                size={40}
                target="_blank"
                variant="ghost"
              >
                Read component docs
              </ButtonLink>
            </Column>
          </Surface>
        </div>

        <Surface className="gap-28 p-32">
          <SectionHeader
            description="A simple tabbed area for swapping between overview, workflow, and activity content."
            label="Tabbed preview"
            title="Product surface snapshots"
          />

          <Tabs defaultValue="overview">
            <TabsPillList aria-label="Product snapshots">
              <TabsPillTab value="overview">Overview</TabsPillTab>
              <TabsPillTab value="workflow">Workflow</TabsPillTab>
              <TabsPillTab value="activity">Activity</TabsPillTab>
            </TabsPillList>

            <div className="h-20" />

            <TabsPanel value="overview">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-16">
                {stats.map((stat) => (
                  <Column
                    key={stat.label}
                    className="border-gray-4 bg-gray-1 gap-10 rounded-[2.2rem] border p-[1.8rem]"
                  >
                    <span className={metaClassName}>{stat.label}</span>
                    <strong className={statValueClassName}>{stat.value}</strong>
                    <span className={copyClassName}>{stat.note}</span>
                  </Column>
                ))}
              </div>
            </TabsPanel>

            <TabsPanel value="workflow">
              <Column className="gap-12">
                {releaseSteps.map((step, index) => (
                  <Row
                    key={step.step}
                    className="rounded-20 border-gray-4 bg-gray-1 items-center justify-between border p-16"
                  >
                    <Row className="min-w-0 flex-1 items-center gap-14">
                      <div className={stepBadgeClassName}>{index + 1}</div>
                      <Column className="min-w-0 gap-4">
                        <strong className={itemTitleClassName}>{step.step}</strong>
                        <span className={copyClassName}>{step.detail}</span>
                      </Column>
                    </Row>
                    <Button size={36} variant="secondary">
                      Open
                    </Button>
                  </Row>
                ))}
              </Column>
            </TabsPanel>

            <TabsPanel value="activity">
              <Column className="gap-12">
                {activity.map((entry) => (
                  <Column
                    key={entry.title}
                    className="rounded-20 border-gray-4 bg-gray-1 gap-6 border p-16"
                  >
                    <Row className="items-center justify-between">
                      <strong className={itemTitleClassName}>{entry.title}</strong>
                      <span className={metaClassName}>{entry.time}</span>
                    </Row>
                    <p className={copyClassName}>{entry.summary}</p>
                  </Column>
                ))}
              </Column>
            </TabsPanel>
          </Tabs>
        </Surface>
      </Column>
    </main>
  )
}

function Surface(props: { children: ReactNode; className?: string }) {
  const { children, className } = props

  return (
    <Column className={cn("rounded-20 border border-gray-4 bg-gray-1 shadow-1", className)}>
      {children}
    </Column>
  )
}

function SectionHeader(props: { description: string; label: string; title: string }) {
  const { description, label, title } = props

  return (
    <Column className="gap-8">
      <span className={eyebrowClassName}>{label}</span>
      <h2 className={sectionTitleClassName}>{title}</h2>
      <p className={copyClassName}>{description}</p>
    </Column>
  )
}

function Field(props: { children: ReactNode; id: string; label: string }) {
  const { children, id, label } = props

  return (
    <Column className="gap-8">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </Column>
  )
}

function MetricRow(props: { label: string; value: string }) {
  const { label, value } = props

  return (
    <Row className="items-center justify-between">
      <span className={metaClassName}>{label}</span>
      <strong className={itemTitleClassName}>{value}</strong>
    </Row>
  )
}

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ")
}

const eyebrowClassName = "text-12 font-bold uppercase tracking-widest text-primary-11"

const titleClassName =
  "m-0 max-w-[72rem] text-[clamp(2.8rem,4vw,4.8rem)] leading-1 tracking-tight text-gray-12"

const sectionTitleClassName = "m-0 text-[2.8rem] leading-[1.1] tracking-tight text-gray-12"

const panelTitleClassName = "m-0 text-16 font-semibold text-gray-12"

const copyClassName = "m-0 text-14 leading-[1.6] text-gray-11"

const metaClassName = "m-0 text-12 font-semibold text-gray-10"

const statValueClassName = "text-[3.2rem] font-bold text-primary-11"

const itemTitleClassName = "text-14 font-semibold text-gray-12"

const pillClassName = "rounded-full bg-primary-3 px-10 py-6 text-12 font-bold text-primary-11"

const stepBadgeClassName =
  "flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-primary-9 text-12 font-bold text-gray-1"
