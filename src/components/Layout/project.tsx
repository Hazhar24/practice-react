import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FcCalendar, FcFile, FcServices } from "react-icons/fc";
import { FcAbout, FcWorkflow } from "react-icons/fc";
import { RiEdit2Line } from "react-icons/ri";
import { BrowserRouter as Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      id: "1",
      title: "blabla title",
      description: "blabla description",
      atUpdate: "2020/1/13 18:37",
    },
  ];
  return (
    <>
      <div className="mx-8 mt-4 flex flex-col">
        <div className="flex mx-6 p-5 justify-between">
          <div className="flex mb-2">
            <FcFile className="w-6 h-6 mx-1" />
            <span className="h-5">List of projects</span>
          </div>
        </div>
        <div className="flex mt-5 m-20 border-b h-11 text-center flex-col  ">
          <table className="table w-full overflow-visible hover:g">
            <thead>
              <tr>
                <th className="p-3">
                  <FcAbout className="inline-block w-6 h-6" />
                  Title
                </th>
                <th className="p-3">
                  <FcWorkflow className="inline-block w-6 h-6" />
                  Description
                </th>
                <th className="p-3 ">
                  <FcCalendar className="inline-block w-6 h-6" /> Last Update
                </th>
                <th className="p-3 text-end">
                  <FcServices className="inline-block w-6 h-6" />
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr>
                  <td className="p-3">
                    <Link
                      to={`${project.id}/concepts`}
                      className="hover:text-blue-600"
                    >
                      {project.title}
                    </Link>
                  </td>
                  <td className="p-3">{project.description}</td>
                  <td className="p-3">{project.atUpdate}</td>
                  <td className="p-3 text-end">
                    <div className="dropdown ltr:dropdown-left rtl:dropdown-right ">
                      <label tabIndex={index} className="">
                        <FaEllipsisV className="w-5 h-5 inline-block" />
                      </label>
                      <ul
                        tabIndex={index}
                        className="border dropdown-content menu p-1 shadow bg-base-100 rounded-md "
                      >
                        <li>
                          <a className="text-info">
                            <RiEdit2Line className="w-5 h-5 inline-block" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="text-error">
                            <AiOutlineDelete className="w-5 h-5 inline-block" />
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Project;
