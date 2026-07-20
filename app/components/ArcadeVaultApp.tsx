"use client";

import { useState, useCallback } from "react";
import Navbar, { User, Route } from "./Navbar";
import Biblioteca from "./Biblioteca";
import Detalle from "./Detalle";
import Reproductor from "./Reproductor";
import Salon from "./Salon";
import Auth from "./Auth";

interface ArcadeVaultAppProps {
  initialUser?: User | null;
}

export default function ArcadeVaultApp({ initialUser }: ArcadeVaultAppProps) {
  const [route, setRoute] = useState<Route>({ name: "biblioteca" });
  const [user, setUser] = useState<User | null>(initialUser || null);

  const navigate = useCallback((newRoute: Route) => {
    setRoute(newRoute);
  }, []);

  const handleLogin = useCallback((newUser: User | null) => {
    setUser(newUser);
  }, []);

  const handleSignOut = useCallback(() => {
    setUser(null);
    navigate({ name: "biblioteca" });
  }, [navigate]);

  const handleSaveScore = useCallback((data: { game: string; score: number; name: string }) => {
    console.log("Score saved:", data);
  }, []);

  return (
    <>
      <div className="av-bg"></div>
      <div className="av-noise"></div>
      <div id="root" className="av-main">
        <Navbar
          route={route}
          navigate={navigate}
          user={user}
          onSignOut={handleSignOut}
        />

        <main>
          {route.name === "biblioteca" && <Biblioteca navigate={navigate} />}
          {route.name === "detalle" && route.id && (
            <Detalle id={route.id} navigate={navigate} />
          )}
          {route.name === "player" && route.id && (
            <Reproductor
              id={route.id}
              user={user}
              navigate={navigate}
              onSaveScore={handleSaveScore}
            />
          )}
          {route.name === "salon" && <Salon user={user} navigate={navigate} />}
          {route.name === "auth" && (
            <Auth navigate={navigate} onLogin={handleLogin} />
          )}
        </main>
      </div>
    </>
  );
}