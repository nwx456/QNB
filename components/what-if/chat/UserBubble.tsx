type UserBubbleProps = {
  content: string;
};

export function UserBubble({ content }: UserBubbleProps) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-qnb-navy px-4 py-2.5 shadow-sm">
        <p className="phone-text text-[13px] text-white">{content}</p>
      </div>
    </div>
  );
}
