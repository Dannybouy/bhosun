interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
}
const ProjectCard = ({ name, description, technologies }: ProjectCardProps) => {
  return (
    <div className="group space-y-4 rounded-lg p-8 transition-all duration-300 hover:bg-[#0f2037] hover:shadow">
      <h3 className="flex items-center text-xl font-semibold text-white group-hover:text-[#57d9cb]">
        {name}
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
      <p className="text-gray-400">{description}</p>
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
  );
};

export default ProjectCard;
