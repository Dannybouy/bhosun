interface ExperienceCardProps {
  position: string;
  company: string;
  description: string[];
  date: string;
  technologies: string[];
  link?: string;
  companyLogo?: string;
}

const ExperienceCard = ({
  position,
  company,
  description,
  date,
  technologies,
  link,
  companyLogo,
}: ExperienceCardProps) => {

  console.log(companyLogo)
  const CardContent = () => (
    <div className="group mb-12 grid-flow-dense grid-cols-3 space-y-4 rounded-lg transition-all duration-300 hover:bg-[#0f2037] hover:shadow lg:mb-0 lg:grid lg:py-8 gap-4 hover:px-6">
      <div className="col-span-1 text-sm text-gray-500 ">
        <span className="text-gray-500 uppercase font-medium">{date}</span>
        {companyLogo && (
          <img
            src={companyLogo}
            alt={company}
            className="rounded mt-2 object-cover"
          />
        )}
      </div>
      <div className="col-span-2 space-y-4">
        <h3 className="flex items-center text-xl font-semibold text-white group-hover:text-[#57d9cb]">
          {position} · {company}
        </h3>
        <p className="text-balance text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-[#122c3f] px-3 py-1 text-sm font-medium text-[#57d9cb]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </a>
  ) : (
    <CardContent />
  );
};

export default ExperienceCard;
