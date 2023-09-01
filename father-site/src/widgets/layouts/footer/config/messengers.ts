export const messengers: Messenger[] = [
    {link: "https://vk.com/id221525752", path: "vk-48.png"},
    {link: "https://wa.me/79049891507?text=Здравствуйте%2C+у+меня+есть+вопрос", path: "whatsapp-48.png"},
    {link: "", path: "viber-48.png"},
]

export interface Messenger {
    link: string,
    path: string
}