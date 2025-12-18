import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Desktop from '../../imports/Desktop3';

export default function EpidemicDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the specific epidemic section based on ID
    if (id) {
      // Give the page a moment to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [id]);

  return <Desktop />;
}
