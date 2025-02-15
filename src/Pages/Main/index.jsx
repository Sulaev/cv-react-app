import { Card } from "@/components/Card"
import { Layout } from "@/components/Layout"
import { Banner } from "@/components/Banner"
import "./styles.css"

const CARD_CONFIG = [
  {
    label: "soft skills",
    tags: [
      {
        label: "communication",
      },
      {
        label: "teamwork",
      },
      {
        label: "time management",
      },
      {
        label: "adaptability",
      },
      {
        label: "analytical thinking",
      },
      {
        label: "emotional intelligence",
      },
    ]
  },
  {
    label: "hard skills",
    tags: [
      {
        label: "HTML & CSS",
      },
      {
        label: "JavaScript",
      },
      {
        label: "Git & GitHub",
      },
      {
        label: "JavaScript frameworks",
      },
      {
        label: "Developer tools",
      },
      {
        label: "Usability basics",
      },
    ]
  },
  {
    label: "my projects",
    tags: [
      {
        label: "hiu",
      },
      {
        label: "chlen",
      },
      {
        label: "penis",
      },
      {
        label: "gordos",
      }
    ]
  },
  {
    label: "my socials",
    tags: [
      {
        label: "github",
        url: '/test'
      },
      {
        label: "linkedin",
        url: '/test'
      },
      {
        label: "telegram",
        url: '/test'
      },
      {
        label: "email",
        url: '/test'
      }
    ]
  },
];

export const Main = () => {
  return (
    <Layout>
      <div className="ContentContainer">
        <Banner />
      </div>
      <div className="CardContainer">
        {CARD_CONFIG.map((card) => (
          <Card label={card.label} tags={card.tags} />
        ))}
      </div>
    </Layout>
  )
}
