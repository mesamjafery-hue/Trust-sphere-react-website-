export const seedData = {
  donations: [
    {
      id: "don-1",
      amount: 125000,
      donorName: "Areeba Foundation",
      purpose: "Ramadan food baskets",
      date: "2026-03-18",
    },
    {
      id: "don-2",
      amount: 42000,
      donorName: "Community Relief Circle",
      purpose: "School supplies",
      date: "2026-03-24",
    },
    {
      id: "don-3",
      amount: 86000,
      donorName: "Sajid Ahmed",
      purpose: "Medical aid support",
      date: "2026-04-12",
    },
  ],
  beneficiaries: [
    {
      id: "ben-1",
      name: "Sana Bibi",
      category: "Widow support",
      supportType: "Monthly stipend",
    },
    {
      id: "ben-2",
      name: "Noor Learning Center",
      category: "Education",
      supportType: "Books and uniforms",
    },
    {
      id: "ben-3",
      name: "Rehman Family",
      category: "Medical assistance",
      supportType: "Emergency treatment fund",
    },
  ],
  events: [
    {
      id: "evt-1",
      title: "Spring Donation Drive",
      date: "2026-04-20",
      location: "Karachi Community Hall",
      description: "A city-wide collection drive for food, hygiene, and cash donations.",
    },
    {
      id: "evt-2",
      title: "Volunteer Orientation",
      date: "2026-04-15",
      location: "TrustSphere HQ",
      description: "Training session for newly onboarded volunteers and coordinators.",
    },
  ],
  volunteers: [
    {
      id: "vol-1",
      name: "Mahnoor Sheikh",
      role: "Field Coordinator",
      availability: "Weekends",
      contact: "+92 300 1112233",
    },
    {
      id: "vol-2",
      name: "Hasnain Raza",
      role: "Event Support",
      availability: "Evenings",
      contact: "+92 311 9995500",
    },
  ],
  settings: {
    organizationName: "TrustSphere",
    theme: "light",
    notifications: true,
    dashboardGreeting: "Every contribution reaches a life that matters.",
  },
};
