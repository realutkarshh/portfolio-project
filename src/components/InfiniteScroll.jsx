import "./styles.css"
import Jack from "../assets/Jack.jpeg";
import Jill from "../assets/Jill.jpeg";
import John from "../assets/John.jpeg";
import James from "../assets/James.jpeg";
import Jenny from "../assets/Jenny.jpeg";
import Jane from "../assets/Jane.jpeg";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Loved the modern design and smooth user experience. Fast, reliable, and easy to work with!",
    img: Jack,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Delivered ahead of schedule with clean, optimized code. Highly professional!",
    img: Jill,
  },
  {
    name: "John",
    username: "@john",
    body: "Our site looks perfect on all devices. Great attention to detail!",
    img: John,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Tackled complex UI challenges and worked well with our team. Impressive skills!",
    img: Jane,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Kept me updated throughout and delivered exactly what I wanted!",
    img: Jenny,
  },
  {
    name: "James",
    username: "@james",
    body: "Added stunning animations and used the latest tech to make our page pop!",
    img: James,
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const Marquee = ({ className, reverse = false, pauseOnHover = false, children }) => {
  return (
    <div className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${className}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around [gap:var(--gap)] ${reverse ? "animate-marquee-reverse" : "animate-marquee"} flex-row
            ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6
      border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]
      "
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold">{name}</figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      {/* <hr class="h-px my-2 bg-gray-300 border-0 "></hr> */}
      <blockquote className="mt-2 text-md font-light">{body}</blockquote>
    </figure>
  )
}

const InfiniteScroll = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-6xl text-gray-950 font-bold text-center mb-4">Testimonials</h1>
      <p className="text-center text-2xl sm:text-2xl text-gray-600 mb-6">See what my Clients are saying about me</p>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white "></div>
      </div>
    </div>
  )
}

export default InfiniteScroll

