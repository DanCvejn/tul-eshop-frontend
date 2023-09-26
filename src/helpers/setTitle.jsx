import { useEffect } from 'react';

const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title + ' | Mamooth';
  }, [title]);
  return;
}

export default setDocumentTitle;
