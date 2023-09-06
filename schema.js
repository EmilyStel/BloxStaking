import { z } from "zod";

export const schemas = {
  operator: z.object({
    id: z.number(),
    id_str: z.string(),
    declared_fee: z.string(),
    previous_fee: z.string(),
    fee: z.string(),
    public_key: z.string(),
    owner_address: z.string(),
    address: z.string(),
    location: z.string(),
    setup_provider: z.string(),
    eth1_node_client: z.string(),
    eth2_node_client: z.string(),
    description: z.string(),
    website_url: z.string(),
    twitter_url: z.string(),
    linkedin_url: z.string(),
    logo: z.string(),
    type: z.string(),
    name: z.string(),
    mev_relays: z.string(),
    performance: z.object({ "24h": z.number(), "30d": z.number() }),
    is_valid: z.boolean(),
    is_deleted: z.boolean(),
    is_active: z.number(),
    status: z.string(),
    validators_count: z.number(),
    version: z.string(),
    network: z.string(),
  }),
  validator: z.object({
    public_key: z.string(),
    cluster: z.string(),
    owner_address: z.string(),
    status: z.string(),
    is_valid: z.boolean(),
    is_deleted: z.boolean(),
    is_public_key_valid: z.boolean(),
    is_shares_valid: z.boolean(),
    is_operators_valid: z.boolean(),
    operators: z.array(
      z.object({
        id: z.number(),
        id_str: z.string(),
        declared_fee: z.string(),
        previous_fee: z.string(),
        fee: z.string(),
        public_key: z.string(),
        owner_address: z.string(),
        address: z.string(),
        location: z.string(),
        setup_provider: z.string(),
        eth1_node_client: z.string(),
        eth2_node_client: z.string(),
        description: z.string(),
        website_url: z.string(),
        twitter_url: z.string(),
        linkedin_url: z.string(),
        logo: z.string(),
        type: z.string(),
        name: z.string(),
        mev_relays: z.string(),
        performance: z.object({ "24h": z.number(), "30d": z.number() }),
        is_valid: z.boolean(),
        is_deleted: z.boolean(),
        is_active: z.number(),
        status: z.string(),
        validators_count: z.number(),
        version: z.string(),
        network: z.string(),
      })
    ),
    validator_info: z.object({
      index: z.number(),
      status: z.string(),
      activation_epoch: z.number(),
    }),
    version: z.string(),
    network: z.string(),
  }),
};