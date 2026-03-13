function NebulaBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] 
      bg-purple-600 rounded-full blur-[200px] opacity-20"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] 
      bg-blue-500 rounded-full blur-[200px] opacity-20"></div>

    </div>
  );
}

export default NebulaBackground;