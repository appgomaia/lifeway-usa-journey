import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

const Header = ({ title, showBack = true }: HeaderProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        {showBack && (
          <Link to="/" className="flex items-center space-x-2 mb-2">
            <ArrowLeft className="w-5 h-5 text-petroleo" />
            <span className="text-petroleo font-figtree font-medium">Voltar</span>
          </Link>
        )}
        {title && (
          <h1 className="text-3xl font-baskerville font-bold text-petroleo">
            {title}
          </h1>
        )}
      </div>
    </header>
  );
};

export default Header;