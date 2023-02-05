import { useState } from "react";
import { Link } from "react-router-dom";
import { teams, projects_list } from "../pages_data";

function Projects() {
  const [filter, setFilter] = useState(null);

  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-3xl decorative mb-5">Our Projects</p>
        <div className="flex gap-5 flex-wrap justify-center">
          <button
            className={filter == null && 'font-semibold'}
            onClick={() => setFilter(() => null)}
          >
            All
          </button>
          {teams.map(t => <button className={filter == t && 'font-semibold'} onClick={() => setFilter(t)}>{t.name.en}</button>)}
        </div>

        <div className="mt-5">
          {
            projects_list.filter((p) => filter == p.teams).map((p, i) =>
              <Link
                className={`flex gap-10 items-center rounded-xl p-5 hover:outline outline-2 ${true && 'flex-row-reverse'}`}
                to={p.url}
              >
                {/* <img src={p.cover} className="h-20" alt="" /> */}
                <div>
                  <div className='text-left text-3xl font-semibold grow italic my-2'>{p.name}</div>
                  <p className="text-left hidden md:block">{p.description}</p>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Projects;
