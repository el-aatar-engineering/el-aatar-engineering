"""Reproduce VORA Research 001 calculations. Python 3, standard library only."""
import csv
import math
from pathlib import Path

MU_KM3_S2 = 398600.4
EARTH_EQUATORIAL_RADIUS_KM = 6378.137
ALTITUDES_KM = [200, 400, 800, 2000, 35786]

def calculate_orbit(altitude_km: float) -> dict:
    radius_km = EARTH_EQUATORIAL_RADIUS_KM + altitude_km
    speed_km_s = math.sqrt(MU_KM3_S2 / radius_km)
    period_s = 2 * math.pi * math.sqrt(radius_km**3 / MU_KM3_S2)
    return {
        "altitude_km": altitude_km,
        "orbital_radius_km": radius_km,
        "circular_speed_km_s": speed_km_s,
        "period_s": period_s,
        "period_min": period_s / 60,
        "period_hours": period_s / 3600,
    }

def main():
    results = [calculate_orbit(h) for h in ALTITUDES_KM]
    output = Path("vora_res001_results.csv")
    with output.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=results[0].keys())
        writer.writeheader()
        writer.writerows(results)
    print("VORA Research 001 — Circular Orbit Model")
    print(f"{'Altitude (km)':>14} {'Speed (km/s)':>14} {'Period (min)':>14}")
    for row in results:
        print(f"{row['altitude_km']:14.0f} {row['circular_speed_km_s']:14.3f} {row['period_min']:14.2f}")
    print(f"CSV written to {output.resolve()}")

if __name__ == "__main__":
    main()
