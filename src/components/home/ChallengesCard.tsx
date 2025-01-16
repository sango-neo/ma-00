import Image from "next/image";

type ChallengesCardProps = {
    title: string,
    iconUrl: string;
    description: string;
}

const ChallengesCard = ({ title, iconUrl, description }: ChallengesCardProps) => {
  return (
    <div className="border-[.5px] border-white/20 rounded p-5 flex flex-col gap-5">
        <div>
            <Image src={iconUrl} width={50} height={50} alt="moago icon" />
        </div>
        <div>{title}</div>
        <p>{description}</p>
    </div>
  )
}

export default ChallengesCard