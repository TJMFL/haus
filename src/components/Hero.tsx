<div className="w-full px-0 relative z-20"> {/* Changed px-2 md:px-4 to px-0 */}
  <div className="max-w-7xl mx-auto px-0"> {/* Kept this wrapper but removed padding */}
    <div className="max-w-3xl px-0"> {/* Removed -mt-20 */}
      <div className={cn(
        "transition-all duration-700 ease-out transform",
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}>
        <p className="text-red-500 uppercase tracking-widest text-sm mb-2 font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          Premium Transportation & Security
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Luxury at Your Service
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl">
          Elite transportation and professional security services tailored for discerning clients who value privacy, reliability, and sophistication.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none luxury-transition px-6"
          >
            <Link to="/booking">
              Book Our Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white/30 hover:bg-white/10 text-white rounded-none luxury-transition"
          >
            <Link to="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
