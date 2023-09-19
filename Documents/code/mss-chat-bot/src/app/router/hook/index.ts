import * as H from 'history';
import { useHistory, useLocation, useParams } from 'react-router';

export function useRoute() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  return {
    history,
    location,
    params,
  };
}
