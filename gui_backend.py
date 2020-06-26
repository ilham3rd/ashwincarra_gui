#!/usr/bin/env python

import rospy
from sensor_msgs.msg import NavSatFix
from sensor_msgs.msg import Range

from mavros_msgs.msg import State

from std_msgs.msg import Float32
from std_msgs.msg import String
from std_msgs.msg import Bool
from std_msgs.msg import Int32





class GUI_Node():

    def globalPositionFun(self,msg):    
       self.pubAltitude.publish(msg.altitude)
       self.pubLatitude.publish(msg.latitude)
       self.pubLongitude.publish(msg.longitude)
       
    
    def mavrosStateFun(self,msg):  
        self.pubArmed.publish(msg.armed)
        self.pubMode.publish(msg.mode)
        self.pubManual.publish(msg.manual_input)
       
    
    def lidarFun(self,msg):
        self.pubLidar.publish(msg.range)
        
    def __init__(self):
        rospy.init_node('gui_node')
        self.setPublisher()
        self.getSubscriber()    
        self.getParam()

    def getSubscriber(self):
        self.globalPosition=rospy.Subscriber('mavros/global_position/global',NavSatFix,self.globalPositionFun)
        self.mavrosState=rospy.Subscriber('mavros/state',State,self.mavrosStateFun)
        self.lidarSub = rospy.Subscriber("/mavros/distance_sensor/lidarlite_pub", Range, self.lidarFun)
    
    def setPublisher(self):
        self.pubAltitude=rospy.Publisher('gui/altitude',Float32,queue_size=10)
        self.pubLongitude=rospy.Publisher('gui/longitude',Float32,queue_size=10)
        self.pubLatitude=rospy.Publisher('gui/latitude',Float32,queue_size=10)
        self.pubArmed=rospy.Publisher('gui/armed',Bool,queue_size=10)
        self.pubMode=rospy.Publisher('gui/mode',String,queue_size=10)
        self.pubManual=rospy.Publisher('gui/remote_manual',Bool,queue_size=10)
        self.pubLidar=rospy.Publisher('gui/lidar',Float32,queue_size=10)
        self.pubHMax=rospy.Publisher('gui/H_Max',Float32,queue_size=10)
    
    def getParam(self):
        self.paramHMax = rospy.get_param('/staciaImageProcessing/High_H/')
        self.pubHMax.publish(self.pubHMax)
        



    


if __name__ == "__main__":
    nGui=GUI_Node()
    rospy.spin()