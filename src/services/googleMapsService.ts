import { DirectionsService } from '@react-google-maps/api';

export async function getRoute(start: string, destination: string) {
  const directionsService = new google.maps.DirectionsService();
  return new Promise<string>((resolve, reject) => {
    directionsService.route(
      {
        origin: start,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const routeSummary = result.routes[0].legs[0].steps
            .map((step) => step.instructions)
            .join(' -> ');
          resolve(`Route: ${routeSummary}, Distance: ${result.routes[0].legs[0].distance?.text}`);
        } else {
          reject('Unable to fetch route');
        }
      }
    );
  });
}