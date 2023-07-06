useEffect(() => {
    // Perform side effect
    const timer = setInterval(() => {
      // Do something
    }, 1000);
  
    // Return cleanup function
    return () => {
      clearInterval(timer); // Clear the timer when component unmounts or dependencies change
      // Perform any additional cleanup tasks
    };
  }, [/* dependencies */]);
  