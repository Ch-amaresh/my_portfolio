function ShootingStars() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">

      <div className="shooting-star" style={{ top: "10%", left: "90%", animationDelay: "0s" }}></div>
      <div className="shooting-star" style={{ top: "30%", left: "80%", animationDelay: "2s" }}></div>
      <div className="shooting-star" style={{ top: "50%", left: "95%", animationDelay: "4s" }}></div>
      <div className="shooting-star" style={{ top: "70%", left: "85%", animationDelay: "6s" }}></div>

    </div>
  );
}

export default ShootingStars;