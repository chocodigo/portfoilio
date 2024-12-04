import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const RecoilIcon: React.FC<IconProps> = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <defs>
        <clipPath id="master_svg0_6_0687">
          <rect x="0" y="0" width="30" height="30" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0687)">
        <g>
          <motion.path
            d="M11.79309326171875,13.074824218749999C12.01621326171875,13.027944218750001,12.24559326171875,12.99482421875,12.47496326171875,12.974824218750001L14.25809326171875,12.80544421875L11.83621326171875,10.15045421875C11.107463261718749,9.34857421875,10.70496326171875,8.31044421875,10.70496326171875,7.22607421875L8.70184326171875,7.22607421875C8.70184326171875,8.80982421875,9.29059326171875,10.33044421875,10.35872326171875,11.50107421875L11.79309326171875,13.074824218749999Z"
            fill="#FFFFFF"
            fillOpacity="1"
            stroke="rgba(255, 255, 255, 0.69)"
            initial={{ pathLength: isHovered ? 0.001 : 1, strokeOpacity: 0 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              fillOpacity: isHovered ? [0, 1] : 1,
              strokeOpacity: isHovered ? 0 : 1,
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            d="M18.048129765625,16.96435546875C17.868759765625,16.99748016875,17.685629765625,17.02060556875,17.502509765625,17.04060526875L15.572509765625,17.22372946875L17.988129765625,19.87185546875C18.716889765624998,20.67372546875,19.119379765625,21.71185546875,19.119379765625,22.796225468750002L21.125639765625,22.796225468750002C21.125639765625,21.21247546875,20.536879765625,19.69560546875,19.468759765625002,18.52122546875L18.048129765625,16.96435546875Z"
            fill="#FFFFFF"
            fillOpacity="1"
            stroke="rgba(255, 255, 255, 0.69)"
            initial={{ pathLength: isHovered ? 0.001 : 1, strokeOpacity: 0 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              fillOpacity: isHovered ? [0, 1] : 1,
              strokeOpacity: isHovered ? 0 : 1,
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            d="M21.365030273437497,11.0794C21.035630273437498,9.4425,19.7512302734375,8.25125,18.0943902734375,8.04187L17.7881402734375,8.00187C16.753140273437502,7.87187,15.9712702734375,6.98687,15.9712702734375,5.94562L15.9712702734375,4.8775C16.8893902734375,4.495,17.5350202734375,3.59,17.5350202734375,2.535C17.5356402734375,1.13438,16.4012702734375,0,15.0006402734375,0C13.600010273437501,0,12.4656402734375,1.13438,12.4656402734375,2.535C12.4656402734375,3.56625,13.0843902734375,4.455,13.9693902734375,4.85063L13.9693902734375,5.945C13.9693902734375,7.9975,15.5031402734375,9.73812,17.539390273437498,9.99063L17.8456402734375,10.0306C18.8006302734375,10.1506,19.2762302734375,10.8556,19.4025302734375,11.4744C19.5287302734375,12.0931,19.3656302734375,12.9281,18.5306402734375,13.4106C18.1212602734375,13.6469,17.6787602734375,13.79,17.2100202734375,13.8331L12.6087702734375,14.2656C11.8500202734375,14.3387,11.1312702734375,14.5681,10.4725202734375,14.9475C9.0250162734375,15.7856,8.3031412734375,17.3831,8.6362664734375,19.02C8.9656412734375,20.6569,10.2500202734375,21.8481,11.9068902734375,22.0575L12.2131402734375,22.0975C13.2481402734375,22.2275,14.0300202734375,23.1125,14.0300202734375,24.1537L14.0300202734375,25.125C13.1150202734375,25.5075,12.473140273437501,26.4125,12.473140273437501,27.4638C12.473140273437501,28.8644,13.607520273437501,29.9988,15.008140273437501,29.9988C16.4087702734375,29.9988,17.5431402734375,28.8644,17.5431402734375,27.4638C17.5431402734375,26.4288,16.9212702734375,25.5375,16.0325202734375,25.145L16.0325202734375,24.1538C16.0325202734375,22.1013,14.4987702734375,20.3606,12.4625202734375,20.1081L12.1562702734375,20.0681C11.2012702734375,19.9481,10.7256402734375,19.2431,10.5993902734375,18.6244C10.473140273437501,18.0056,10.6362702734375,17.1706,11.4712702734375,16.6881C11.8806402734375,16.4519,12.3231402734375,16.3088,12.791890273437499,16.2656L17.3931402734375,15.8331C18.151890273437502,15.76,18.8706302734375,15.5306,19.529430273437498,15.1513C20.9762302734375,14.3131,21.6944302734375,12.7163,21.365030273437497,11.0794Z"
            fill="#FFFFFF"
            fillOpacity="1"
            stroke="rgba(255, 255, 255, 0.69)"
            initial={{ pathLength: isHovered ? 0.001 : 1, strokeOpacity: 0 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              fillOpacity: isHovered ? [0, 1] : 1,
              strokeOpacity: isHovered ? 0 : 1,
            }}
            transition={transition}
          />
        </g>
      </g>
    </svg>
  );
};
