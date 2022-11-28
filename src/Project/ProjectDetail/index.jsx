import { createQueryParamModalHelpers } from "shared/utils/queryParamModal";
import Sidebar from "./Sidebar";
import IssueSearch from './IssueSearch'
import IssueCreate from './IssueCreate'
import { Modal } from "shared/components";
import { ProjectPage } from "./Styles";

export default function ProjectDetail() {
  const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
  const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');
  return (
    <ProjectPage>
      <Sidebar project={{}} />
      {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
          renderContent={() => <IssueSearch 
            // project={project}
          />}
        />
      )}

      {issueCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-create"
          width={800}
          withCloseIcon={false}
          onClose={issueCreateModalHelpers.close}
          renderContent={modal => (
            <IssueCreate
              // project={project}
              // fetchProject={fetchProject}
              // onCreate={() => history.push(`${match.url}/board`)}
              modalClose={modal.close}
            />
          )}
        />
      )}
    </ProjectPage>
  );
}
