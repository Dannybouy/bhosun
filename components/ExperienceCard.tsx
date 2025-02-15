import React from "react";

interface ExperienceCardProps {
  position: string;
  company: string;
  description: string[];
  date: string;
  technologies: string[];
  link?: string;
}

const ExperienceCard = ({
  position,
  company,
  description,
  date,
  technologies,
  link,
}: ExperienceCardProps) => {
  const CardContent = () => (
    <div className="group grid grid-flow-dense grid-cols-3 space-y-4 rounded-lg p-8 transition-all duration-300 hover:bg-[#0f2037] hover:shadow">
      <div className="col-span-1 text-sm text-gray-500">{date}</div>
      <div className="col-span-2 space-y-4">
        <h3 className="flex items-center text-xl font-semibold text-white group-hover:text-[#57d9cb]">
          {position} · {company}
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
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
