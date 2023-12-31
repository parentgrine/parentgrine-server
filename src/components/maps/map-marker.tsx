import React from 'react';
import L from 'leaflet';
import { Circle, Marker, Popup } from 'react-leaflet';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import Link from 'next/link';
import { Icons } from '@/components/icons';


type MapMarkerProps = {
  childName: string;
  avatar: string;
  deviceName: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
};
const fillBlueOptions = { fillColor: 'blue' };
const fillRedOptions = { fillColor: 'red' };

const _getIcon = (icon: string) => {
  return L.icon({
    iconUrl: icon,
    iconSize: [24, 24],
  });
};
const MapMarker: React.FC<MapMarkerProps> = (
  { childName, avatar, deviceName, latitude, longitude, timestamp }) => {
  return <Marker
    position={[latitude, longitude]}
    icon={_getIcon(avatar)}
  >
    <Popup>
      <Card className="w-full max-w-md p-6 grid gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={childName} />
            <AvatarFallback>{getInitials(childName)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="text-lg font-bold">{childName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">on {deviceName}</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last seen - {timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString()}
        </div>
        <div className="flex justify-end gap-4">
          <Link className="" href="#">
            <Icons.message className="h-6 w-6" />
          </Link>
          <Link className="text-blue-700" href="#">
            <Icons.call className="h-6 w-6" />
          </Link>
        </div>
      </Card>
      {/*<Card>*/}
      {/*  <CardHeader>*/}
      {/*    <CardTitle>*/}
      {/*      <div className="flex flex-row items-center px-2 space-x-3">*/}
      {/*        <Avatar>*/}
      {/*          <AvatarImage src={avatar} alt={childName} className="w-12 h-12" />*/}
      {/*          <AvatarFallback>{getInitials(childName)}</AvatarFallback>*/}
      {/*        </Avatar>*/}
      {/*        <span>*/}
      {/*          {childName}*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </CardTitle>*/}
      {/*    <CardDescription>on {deviceName} </CardDescription>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
      {/*    <p> Was seen here @ {timestamp.toLocaleDateString()}</p>*/}
      {/*  </CardContent>*/}
      {/*  <CardFooter>*/}
      {/*  </CardFooter>*/}
      {/*</Card>*/}
    </Popup>
  </Marker>;
};

export default MapMarker;
