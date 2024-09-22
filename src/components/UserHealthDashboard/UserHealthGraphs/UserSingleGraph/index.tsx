export interface UserSingleGraphProps {
  indicator: string;
}

export default function UserSingleGraph({ indicator }: UserSingleGraphProps) {
  return (
    <div className="h-full min-w-96 rounded-lg bg-gray-800 p-2 text-white">
      {indicator}
    </div>
  );
}
