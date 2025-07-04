import config from "../config"
import { sendMsg } from "./utils/Utils"

let ignore = [
    // sent
    //"C03PacketPlayer",
    "C0FPacketConfirmTransaction",
    "C00PacketKeepAlive",
    "C16PacketClientStatus",
    // received
    "S03PacketTimeUpdate",
    "S15PacketEntityRelMove",
    "S00PacketKeepAlive",
    "S37PacketStatistics",
    "S19PacketEntityHeadLook",
    "S1CPacketEntityMetadata",
    "S20PacketEntityProperties",
    "S38PacketPlayerListItem",
    "S3CPacketUpdateScore",
    "S3BPacketScoreboardObjective",
    "S13PacketDestroyEntities",
    "S16PacketEntityLook",
    "S04PacketEntityEquipment",
    "S32PacketConfirmTransaction",
    "S17PacketEntityLookMove",
    "S12PacketEntityVelocity", //
    "S18PacketEntityTeleport",
    "S2APacketParticles", //
    "S29PacketSoundEffect",
    "S0FPacketSpawnMob",
    "S10PacketSpawnPainting",
    "S35PacketEntityEffect",
    "S06PacketUpdateHealth",
    "S0EPacketSpawnObject",
    "S21PacketChunkData",
    "S0CPacketSpawnPlayer",
    "S3EPacketTeams",
    "S23PacketBlockChange",
    "S33PacketUpdateSign",
    "S22PacketMultiBlockChange", //
    "S1DPacketEntityEffect",
    "S35PacketUpdateTileEntity",
    "S30PacketWindowItems",
    "S2FPacketSetSlot",
    "S11PacketSpawnExperienceOrb",
    "S02PacketChat", //
    "S0BPacketAnimation",
]

register("packetSent", (packet) => {
    const packetName = packet.getClass().getSimpleName()
    if (!config().PacketsSent) return
    if (ignore.includes(packetName)) {
        return
    }
    sendMsg(`&7Sent: &6${packetName}`)
})

register("packetReceived", (packet) => {
    const packetName = packet.getClass().getSimpleName()
    if (!config().PacketsReceived) return
    if (ignore.includes(packetName)) {
        return
    }
    sendMsg(`&7Received: &6${packetName}`)
})