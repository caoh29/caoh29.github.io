import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ADDRESS_LINES } from '../../utils/constants';

export default function Address() {
  return (
    <address className="address">
      {ADDRESS_LINES.map((line) => (
        <dl key={line.content}>
          <dt>
            <FontAwesomeIcon icon={line.icon} />
          </dt>
          <dd>
            {line.title === '' ? (
              <strong>
                <a href={line.href}>{line.content}</a>
              </strong>
            ) : (
              <>
                <strong>{line.title}</strong>
                <br />
                <a href={line.href}>{line.content}</a>
              </>
            )}
          </dd>
        </dl>
      ))}
    </address>
  );
}
