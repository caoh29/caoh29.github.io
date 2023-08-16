import { PortfolioInfoProps } from '../../types';

export default function PortfolioInfo({
  title,
  text,
  url,
}: PortfolioInfoProps) {
  return (
    <div className="portfolio-info">
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={url}>View Source</a>
    </div>
  );
}
